import React, { useState, FormEvent } from 'react';
import { Form, Title, Repositories } from './styles';
import api from '../../services/api';
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

    const [newRepo, setNewRepo] = useState('');

    const [repositories, setRepositories] = useState<Repository[]>([]);


    async function handleAddRepository(event: FormEvent<HTMLFormElement>) { //FormEvent = evento do formulário. o html por padrão tenta redirecionar de página quando submete um
        //formulário. o htmlformelement representa o elemento html do form, 
        event.preventDefault();
        //adição de um novo repositorio
        //consumir API do Github
        //Salvar novo repositório no estado
        const response = await api.get<Repository>(`repos/${newRepo}`);

        const repository = response.data;


        setRepositories([...repositories, repository]);
        setNewRepo('');

    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>


            <Form onSubmit={handleAddRepository}>
                <input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                {
                    repositories.map(repository => (
                        <a key={repository.full_name} href="#">
                            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>

                            <FiChevronRight size={20} />
                        </a>
                    ))
                }
            </Repositories>
        </>

    );
}

export default Dashboard;