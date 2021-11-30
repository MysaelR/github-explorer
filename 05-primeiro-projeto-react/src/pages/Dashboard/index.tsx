import React, { useState, FormEvent, useEffect } from 'react';
import { Form, Title, Repositories, Error } from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';


interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    //const list = ['1', '2', '3'];
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    //const [repositories, setRepositories] = useState<Repository[]>([]);
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');
        console.log(storagedRepositories);
        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }
        return [];

    });

    useEffect(() => { //salvar registros novos no LocalStorage, e como não aceita array, foi usado o JSON.stringfy para converter o array
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);

    /*useEffect(() => {
        localStorage.setItem('@keytest', JSON.stringify(list));
    }, [repositories]);*/



    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {//FormEvent = evento do formulário. o html por padrão tenta redirecionar de página quando submete um
        //formulário. o htmlformelement representa o elemento html do form, 
        event.preventDefault();
        if (!newRepo) { //caso não seja digitado nada no campo
            setInputError('Digite o autor/nome do repositório');
            return; //se não colocar o return, ele vai continuar executando o código
        }
        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        } catch (error) {
            setInputError('Erro na busca por esse repositório');
        }
        //adição de um novo repositorio
        //consumir API do Github
        //Salvar novo repositório no estado
    }


    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>


            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {
                    repositories.map(repository => (
                        <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>

                            <FiChevronRight size={20} />
                        </Link>
                    ))
                }
            </Repositories>
        </>

    );
}

export default Dashboard;