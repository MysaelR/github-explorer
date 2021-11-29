import React from 'react';
import { Title } from './styles';
import { Form } from './styles';
import { Repositories } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>


            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="#">
                    <img src="https://avatars.githubusercontent.com/u/90765797?v=4" alt="Mysael Ribeiro" />
                    <div>
                        <strong>MysaelR/uniform</strong>
                        <p>Descrição aleatória para desenvolvimento da aplicação</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="#">
                    <img src="https://avatars.githubusercontent.com/u/90765797?v=4" alt="Mysael Ribeiro" />
                    <div>
                        <strong>MysaelR/uniform</strong>
                        <p>Descrição aleatória para desenvolvimento da aplicação</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="#">
                    <img src="https://avatars.githubusercontent.com/u/90765797?v=4" alt="Mysael Ribeiro" />
                    <div>
                        <strong>MysaelR/uniform</strong>
                        <p>Descrição aleatória para desenvolvimento da aplicação</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>

    );
}

export default Dashboard;