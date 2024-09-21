import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {firstName: 'Om'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type = 'greeting'
          title = 'Welcome'
          user = {loggedIn.firstName || 'Guest'}
          subtext = 'Your trusted partner for secure and efficient financial management'
          />
        </header>
        <TotalBalanceBox 
        accounts = {[]}
        totalBanks = {1}
        totalCurrentBalance = {1423.45}
        />
      </div>
    </section>
  );
};

export default Home;
