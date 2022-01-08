-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2022 at 08:09 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node-with-sequelize`
--

-- --------------------------------------------------------

--
-- Table structure for table `address-book`
--

CREATE TABLE `address-book` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `addressLine1` varchar(255) DEFAULT NULL,
  `addressLine2` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `pinCode` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address-book`
--

INSERT INTO `address-book` (`id`, `title`, `addressLine1`, `addressLine2`, `country`, `state`, `city`, `pinCode`) VALUES
(1, 'Novel', 'oiuyrdtfg', 'xdcfgvbujiuyt', 'India', 'Gujarat', 'Rajkot', 360004),
(4, 'Beble', 'oiuyrdtfg', 'xdcfgvbujiuyt', 'India', 'Punjab', 'Amritsar', 560004);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `profileImage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `name`, `email`, `password`, `gender`, `profileImage`) VALUES
(1, 'Kaushik Rathod', 'KaushikRathod@gmail.com', '$2b$10$fXC4IhCfivyecF7AW/4rq.IBHQFrA3Ghop3TDTMn831OAVBKeuQLG', 'Male', 'profileImage-1641619543387'),
(2, 'Sagar', 'SagarJaviya@gmail.com', '$2b$10$3NRUtrQpy5G23Asdzzh8EezMQ.5SQHaZt8o5.n2JiGzmiyPULPDi.', 'Male', 'profileImage-1641619180555');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address-book`
--
ALTER TABLE `address-book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address-book`
--
ALTER TABLE `address-book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
