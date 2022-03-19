-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2022 at 06:26 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ehrlich`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_files`
--

CREATE TABLE `tbl_files` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `hits` int(11) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `public_id` varchar(255) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_files`
--

INSERT INTO `tbl_files` (`id`, `url`, `hits`, `user_email`, `public_id`, `status`) VALUES
(1, 'https://res.cloudinary.com/dnjecurni/image/upload/v1647666858/Ehrlich/lmwdc9y9yljvk3jb7x19.jpg', 3, 'email@admin.com', 'Ehrlich/lmwdc9y9yljvk3jb7x19', ''),
(2, 'https://res.cloudinary.com/dnjecurni/image/upload/v1647666859/Ehrlich/dwt8vgp1f95vozmbdx3k.jpg', 1, 'email@admin.com', 'Ehrlich/dwt8vgp1f95vozmbdx3k', ''),
(3, 'https://res.cloudinary.com/dnjecurni/image/upload/v1647667004/Ehrlich/of8wunkoovbpivxu5n82.jpg', 2, 'email@admin.com', 'Ehrlich/of8wunkoovbpivxu5n82', ''),
(4, 'https://res.cloudinary.com/dnjecurni/image/upload/v1647666862/Ehrlich/gytcgu9pnpubjizrf5oh.jpg', 1, 'email@admin.com', 'Ehrlich/gytcgu9pnpubjizrf5oh', 'I'),
(5, 'https://res.cloudinary.com/dnjecurni/image/upload/v1647666954/Ehrlich/bb1dodatgmrs9vqmb482.jpg', 2, 'email@admin.com', 'Ehrlich/bb1dodatgmrs9vqmb482', ''),
(6, 'https://res.cloudinary.com/dnjecurni/image/upload/v1647667037/Ehrlich/gz3spgob2zsch4qaowuw.jpg', 1, 'email@admin.com', 'Ehrlich/gz3spgob2zsch4qaowuw', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `email`, `password`, `role`) VALUES
(1, 'email@admin.com', 'c1c224b03cd9bc7b6a86d77f5dace40191766c485cd55dc48caf9ac873335d6f', 'administrator');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_files`
--
ALTER TABLE `tbl_files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_files`
--
ALTER TABLE `tbl_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
