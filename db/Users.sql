-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 31, 2018 at 08:30 PM
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
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `ID` char(36) NOT NULL,
  `username` varchar(256) NOT NULL,
  `passwordHash` varchar(512) NOT NULL,
  `email` varchar(256) NOT NULL,
  `APIKey` varchar(512) NOT NULL,
  `purchaseDate` datetime DEFAULT NULL,
  `dateCreated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`ID`, `username`, `passwordHash`, `email`, `APIKey`, `purchaseDate`, `dateCreated`) VALUES
('96371ac1-5c00-4578-ba9e-d104ca05f426', 'andrew.godfroy@killerrin.com', '37268335dd6931045bdcdf92623ff819a64244b53d0e746d438797349d4da578', 'andrew.godfroy@killerrin.com', 'b8bd9857fb05331241d46d0d036e6391085c424d4d02e552d032d0625481e0ab', NULL, '2018-05-31 17:05:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
 ADD PRIMARY KEY (`ID`), ADD UNIQUE KEY `username` (`username`), ADD KEY `ID` (`ID`), ADD KEY `APIKey` (`APIKey`), ADD KEY `email` (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
