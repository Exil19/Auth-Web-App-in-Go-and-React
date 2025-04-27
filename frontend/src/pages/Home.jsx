import React from 'react';
import NavBar from '../components/NavBar';


const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-5 text-center">
        <h1 className="display-4 mb-4">Добро пожаловать в AuthGO!</h1>
        <p className="lead mb-4">
          Простой сайт для регистрации и входа пользователей. Начни с создания аккаунта или войди, если уже зарегистрирован!
        </p>
        <div>
          <a href="/register" className="btn btn-primary btn-lg me-3">
            Регистрация
          </a>
          <a href="/login" className="btn btn-outline-primary btn-lg">
            Войти
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
