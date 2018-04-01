-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 01, 2018 at 02:47 AM
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
-- Table structure for table `Boxes`
--

CREATE TABLE IF NOT EXISTS `Boxes` (
  `ID` char(36) NOT NULL,
  `name` varchar(256) NOT NULL,
  `description` text,
  `picture` blob,
  `userID` char(36) NOT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `location` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Boxes`
--

INSERT INTO `Boxes` (`ID`, `name`, `description`, `picture`, `userID`, `latitude`, `longitude`, `location`) VALUES
('ba7bbcf7-e098-4736-a410-301844ba9ba7', 'box', NULL, NULL, '96371ac1-5c00-4578-ba9e-d104ca05f426', 0, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `BoxItems`
--

CREATE TABLE IF NOT EXISTS `BoxItems` (
  `ID` char(36) NOT NULL,
  `name` varchar(256) NOT NULL,
  `boxID` char(36) NOT NULL,
  `userID` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
('0268da4d-eb0e-480a-9654-a66a9af35b74', 'jacobartin@rogers.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'jacobartin@rogers.com', '7446d2ca9c74bac65c060844598569c04c1e6e62aab5544077255e3cdeb00108', NULL, '0000-00-00 00:00:00'),
('039868ed-06cc-466f-8e50-230f7bd0c7ea', 'wut@w.ut', 'fde28c9b2af465a1bdca9874e8d32d9975b9ef1ce92bd61f1119516a55129fa7', 'wut@w.ut', 'c7236c4cafcda97d9402217679d58cfd766de9d69748c02c3952790751bf962f', NULL, '0000-00-00 00:00:00'),
('6e35c115-a6c8-482e-8bcb-d53794bb2b29', 'jacobmartin@rogers.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'jacobmartin@rogers.com', '0a8bb54569393230f1a9285089cce489b050c6079bd0c6eb80eaad521f71d199', NULL, '0000-00-00 00:00:00'),
('72c7005f-5f09-4a9b-a53c-c3cc83431404', 'jacoartin@rogers.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'jacoartin@rogers.com', '0b0ee9db2a18cff5a7c7bb3399e03e59491f9098f9203783dcbaf972cbb85310', NULL, '0000-00-00 00:00:00'),
('7b37265b-ee6a-4007-b551-7568938fdf80', 'a@b.c', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'a@b.c', '764be58fce9af5ac27237465e712df36ba559e9b3de3962f0e856cb9689252df', NULL, '0000-00-00 00:00:00'),
('96371ac1-5c00-4578-ba9e-d104ca05f426', 'andrew.godfroy@killerrin.com', '37268335dd6931045bdcdf92623ff819a64244b53d0e746d438797349d4da578', 'andrew.godfroy@killerrin.com', 'b8bd9857fb05331241d46d0d036e6391085c424d4d02e552d032d0625481e0ab', NULL, '2018-05-31 17:05:10'),
('a8233d8b-2518-45cb-8dfd-950dcf0c3dc4', 'p.7g@icloud.com', '37268335dd6931045bdcdf92623ff819a64244b53d0e746d438797349d4da578', 'p.7g@icloud.com', 'da0b3091c9bcb68d7d77e77589fb84044a288fc467efa0dc21a1d7601f5fd0f5', NULL, '0000-00-00 00:00:00'),
('b1d7d038-9c6c-4ee7-a7e6-2a6bf8cef5ab', 'jacob_martin@rogers.com', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'jacob_martin@rogers.com', '75c8a5b3ca263dae7cc23d77b5e9574efcee89515531842de851ddda82900f84', NULL, '0000-00-00 00:00:00'),
('b69bd3c1-924d-4d60-bd3b-2e0fded4e574', 'jakeincanada@icloud.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'jakeincanada@icloud.com', 'ea6f1530894acdc264efbfbd5cade61d90db1c1f9b0289cde017971b2f22b41c', NULL, '2018-08-01 03:08:21');

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
-- Indexes for table `Boxes`
--
ALTER TABLE `Boxes`
 ADD PRIMARY KEY (`ID`), ADD KEY `userID` (`userID`);

--
-- Indexes for table `BoxItems`
--
ALTER TABLE `BoxItems`
 ADD PRIMARY KEY (`ID`), ADD KEY `boxID` (`boxID`,`userID`), ADD KEY `userID` (`userID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
 ADD PRIMARY KEY (`ID`), ADD UNIQUE KEY `username` (`username`), ADD KEY `ID` (`ID`), ADD KEY `APIKey` (`APIKey`), ADD KEY `email` (`email`);

--
-- Indexes for table `UserTransactions`
--
ALTER TABLE `UserTransactions`
 ADD PRIMARY KEY (`ID`), ADD KEY `userID` (`userID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Boxes`
--
ALTER TABLE `Boxes`
ADD CONSTRAINT `Boxes_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `Users` (`ID`) ON DELETE CASCADE;

--
-- Constraints for table `BoxItems`
--
ALTER TABLE `BoxItems`
ADD CONSTRAINT `BoxItems_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `Users` (`ID`) ON DELETE CASCADE,
ADD CONSTRAINT `BoxItems_ibfk_1` FOREIGN KEY (`boxID`) REFERENCES `Boxes` (`ID`) ON DELETE CASCADE;

--
-- Constraints for table `UserTransactions`
--
ALTER TABLE `UserTransactions`
ADD CONSTRAINT `UserTransactions_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `Users` (`ID`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
