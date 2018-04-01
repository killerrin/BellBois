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
-- Table structure for table `Boxes`
--

CREATE TABLE IF NOT EXISTS `Boxes` (
  `ID` char(36) NOT NULL,
  `name` varchar(256) NOT NULL,
  `description` text,
  `picture` blob,
  `userID` char(36) NOT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Boxes`
--

INSERT INTO `Boxes` (`ID`, `name`, `description`, `picture`, `userID`, `latitude`, `longitude`) VALUES
('5c948205-c299-4fd9-b4d7-700227be33fc', 'box', NULL, NULL, '96371ac1-5c00-4578-ba9e-d104ca05f426', NULL, NULL),
('7223f05c-e32c-4812-a0be-c9aa4c4fcbfd', 'box', NULL, NULL, '96371ac1-5c00-4578-ba9e-d104ca05f426', NULL, NULL),
('d0ff6d58-b954-4e3e-af0d-9036724ebab9', 'box', NULL, NULL, '96371ac1-5c00-4578-ba9e-d104ca05f426', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Boxes`
--
ALTER TABLE `Boxes`
 ADD PRIMARY KEY (`ID`), ADD KEY `userID` (`userID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Boxes`
--
ALTER TABLE `Boxes`
ADD CONSTRAINT `Boxes_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `Users` (`ID`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
