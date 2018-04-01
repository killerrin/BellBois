-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 31, 2018 at 08:29 PM
-- Server version: 5.5.59-0+deb8u1
-- PHP Version: 5.6.33-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bellbois`
--

-- --------------------------------------------------------

--
-- Table structure for table `UserTransactions`
--

CREATE TABLE IF NOT EXISTS `UserTransactions` (
  `ID` char(36) NOT NULL,
  `userID` char(36) NOT NULL,
  `transactionDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `UserTransactions`
--
ALTER TABLE `UserTransactions`
 ADD PRIMARY KEY (`ID`), ADD KEY `userID` (`userID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `UserTransactions`
--
ALTER TABLE `UserTransactions`
ADD CONSTRAINT `UserTransactions_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `Users` (`ID`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
