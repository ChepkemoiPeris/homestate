-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2023 at 10:05 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `house_listing`
--

-- --------------------------------------------------------

--
-- Table structure for table `houses`
--

CREATE TABLE `houses` (
  `id` int(20) NOT NULL,
  `name` varchar(250) NOT NULL,
  `user_id` int(20) NOT NULL,
  `location_id` int(20) NOT NULL,
  `sublocation` int(20) NOT NULL,
  `location_details` varchar(200) NOT NULL,
  `bedrooms` varchar(100) NOT NULL,
  `description` varchar(250) NOT NULL,
  `water` varchar(100) NOT NULL,
  `internet` varchar(100) NOT NULL,
  `parking` tinyint(1) NOT NULL DEFAULT 0,
  `vacant` int(20) NOT NULL,
  `image` varchar(200) NOT NULL,
  `rent` varchar(200) NOT NULL,
  `electricity` varchar(200) DEFAULT NULL,
  `deposit` int(20) DEFAULT 0,
  `reviewed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `houses`
--

INSERT INTO `houses` (`id`, `name`, `user_id`, `location_id`, `sublocation`, `location_details`, `bedrooms`, `description`, `water`, `internet`, `parking`, `vacant`, `image`, `rent`, `electricity`, `deposit`, `reviewed`) VALUES
(1, 'Lulu heights', 1, 1, 2, '0', 'one bedroom', 'Spacious one bedroom', 'Nairobi water', 'Zuku,JTL and poa', 1, 23, './uploads/houses/cover_image-1666513525771.jpg', '2500', 'KPLC tokens', 0, 1),
(2, 'Msalaba heights', 1, 1, 2, '0', 'Two bedroom', 'Spacious two  bedroom perfect for family', 'Nairobi water', 'Zuku,JTL and poa', 1, 0, './uploads/houses/cover_image-1667808128126.jpg', '2500', 'Free electricity', 0, 1),
(3, 'Kili heights', 1, 2, 6, 'Located near ACK church along muhuri road', 'bedsitter', 'Spacious bedsitters available now', 'Nairobi water', 'Zuku,JTL and poa', 1, 23, './uploads/houses/cover_image-1667813403607.jpg', '25000', 'KPLC tokens', 0, 1),
(4, 'The james heights', 1, 3, 11, 'Located near ACK church along muhuri road', 'bedsitter', 'Spacious bedsitters available now', 'Nairobi water', 'Zuku,JTL and poa', 1, 23, './uploads/houses/cover_image-1667814349385.jpg', '25000', NULL, 0, 0),
(5, 'The james heights', 1, 3, 11, 'Located near ACK church along muhuri road', 'bedsitter', 'Spacious bedsitters available now', 'Nairobi water', 'Zuku,JTL and poa', 1, 0, './uploads/houses/cover_image-1667814619771.jpg', '25000', NULL, 0, 0),
(6, 'The james heights', 1, 3, 12, 'Located near ngong road  ', 'Three bedroom ', 'Spacious bedsitters available now', 'Nairobi water', 'Zuku,JTL and poa', 1, 23, './uploads/houses/cover_image-1667815020731.jpg', '25000', NULL, 0, 0),
(7, 'Great apartments', 1, 3, 12, 'Located near ngong road  ', 'Three bedroom ', 'Spacious bedsitters available now', 'Nairobi water', 'Zuku,JTL and poa', 1, 23, './uploads/houses/cover_image-1667815052370.jpg', '25000', NULL, 0, 0),
(8, 'Dakota Torres', 3, 1, 1, 'Ducimus natus ipsam', 'Two bedroom', 'Anim elit quia est', 'Dolorum do eligendi', 'Blanditiis itaque re', 1, 0, './uploads/houses/cover_image-1666513525771.jpg', '43', 'Sit sint nisi odio', 68, 0),
(9, 'Thane Peters', 3, 1, 9, 'Est Nam quia libero ', 'One bedroom', 'Saepe aut pariatur ', 'Aspernatur consectet', 'Nostrud esse reprehe', 0, 10, './uploads/houses/cover_image-1668452594242.jpg', '48', 'In facilis vel beata', 64, 0),
(10, 'Gwendolyn Hester', 3, 1, 62, 'Eiusmod explicabo N', 'One bedroom', 'Soluta praesentium m', 'Autem ipsa eos libe', 'Illo ab veniam eius', 1, 0, './uploads/houses/cover_image-1668504914866.jpg', '15', 'Culpa est ut omnis a', 66, 0),
(11, 'Gwendolyn Hester', 3, 1, 62, 'Eiusmod explicabo N', 'One bedroom', 'Soluta praesentium m', 'Autem ipsa eos libe', 'Illo ab veniam eius', 1, 64, './uploads/houses/cover_image-1668504931204.jpg', '15', 'Culpa est ut omnis a', 66, 0),
(12, 'Gwendolyn Hester', 3, 1, 62, 'Eiusmod explicabo N', 'One bedroom', 'Soluta praesentium m', 'Autem ipsa eos libe', 'Illo ab veniam eius', 1, 64, './uploads/houses/cover_image-1668505519361.jpg', '15', 'Culpa est ut omnis a', 66, 0),
(13, 'Gwendolyn Hester', 3, 1, 62, 'Eiusmod explicabo N', 'One bedroom', 'Soluta praesentium m', 'Autem ipsa eos libe', 'Illo ab veniam eius', 1, 64, './uploads/houses/cover_image-1668505815248.jpg', '15', 'Culpa est ut omnis a', 66, 0),
(14, 'Gwendolyn Hester', 3, 1, 62, 'Eiusmod explicabo N', 'One bedroom', 'Soluta praesentium m', 'Autem ipsa eos libe', 'Illo ab veniam eius', 1, 64, './uploads/houses/cover_image-1668507500127.jpg', '15', 'Culpa est ut omnis a', 66, 0),
(15, 'Gwendolyn Hester', 3, 1, 62, 'Eiusmod explicabo N', 'One bedroom', 'Soluta praesentium m', 'Autem ipsa eos libe', 'Illo ab veniam eius', 1, 64, './uploads/houses/cover_image-1668507843527.jpg', '15', 'Culpa est ut omnis a', 66, 0),
(16, 'Ocean Burnett', 3, 16, 77, 'Deserunt et quasi qu', 'Bedsitters', 'Laboris quisquam omn', 'Laborum Officia qui', 'Et consequatur Quia', 1, 21, './uploads/houses/cover_image-1668508189278.jpg', '3300', 'Obcaecati doloremque', 2900, 0),
(17, 'Beverly Thompson', 3, 17, 86, 'Ea minima mollit ut ', 'Bedsitters', 'Quaerat dolor culpa ', 'Sit corporis natus ', 'Sed saepe iusto qui ', 0, 17, './uploads/houses/cover_image-1668606722127.jpg', '62', 'Facilis fuga Volupt', 91, 0),
(18, 'Jena Nicholson', 3, 1, 2, 'Quo in in ab consect', 'Bedsitters', 'Aut enim dolore nihi', 'Debitis et qui cillu', 'Quibusdam voluptatib', 0, 73, './uploads/houses/cover_image-1669112691788.PNG', '2', 'Omnis voluptatem est', 92, 0),
(19, 'Jade Beasley', 3, 5, 26, 'Ducimus sint minus ', 'One bedroom', 'Voluptate quisquam i', 'Minima soluta volupt', 'Provident dolor rep', 1, 81, './uploads/houses/cover_image-1669113154511.PNG', '59', 'In rerum eius sapien', 29, 0);

-- --------------------------------------------------------

--
-- Table structure for table `house_images`
--

CREATE TABLE `house_images` (
  `id` int(20) NOT NULL,
  `house_id` int(20) NOT NULL,
  `image` varchar(200) NOT NULL,
  `reviewed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `house_images`
--

INSERT INTO `house_images` (`id`, `house_id`, `image`, `reviewed`) VALUES
(12, 17, './uploads/houses/more/house_images-1668606742530.jpg', 0),
(13, 17, './uploads/houses/more/house_images-1668606742677.jpg', 0),
(14, 17, './uploads/houses/more/house_images-1668606742761.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(20) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `name`) VALUES
(1, 'Westlands'),
(2, 'Dagoretti North'),
(3, 'Dagoretti South'),
(4, 'Langata'),
(5, 'Kibra'),
(6, 'Roysambu'),
(7, 'Kasarani'),
(8, 'Ruaraka'),
(9, 'Embakasi South'),
(10, 'Embakasi North'),
(11, 'Embakasi Central'),
(12, 'Embakasi East'),
(13, 'Embakasi West'),
(14, 'Makadara'),
(15, 'Kamukunji'),
(16, 'Starehe'),
(17, 'Mathare');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(20) NOT NULL,
  `title` varchar(200) NOT NULL,
  `details` varchar(200) NOT NULL,
  `notify` varchar(100) NOT NULL,
  `viewed` tinyint(1) NOT NULL DEFAULT 0,
  `date_created` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `title`, `details`, `notify`, `viewed`, `date_created`) VALUES
(2, 'Realtor account Request', 'Request by user 4on17/11/2022', '3', 0, '17/11/2022'),
(3, 'Realtor account Request', 'Request by user id7 on 17/11/2022', '3', 0, '17/11/2022');

-- --------------------------------------------------------

--
-- Table structure for table `realtors`
--

CREATE TABLE `realtors` (
  `id` int(20) NOT NULL,
  `user_id` int(20) NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT 0,
  `date_approved` varchar(100) DEFAULT NULL,
  `id_image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `realtors`
--

INSERT INTO `realtors` (`id`, `user_id`, `approved`, `date_approved`, `id_image`) VALUES
(1, 1, 0, NULL, './uploads/realtors/realtor_id-1668675597813.jpg'),
(7, 4, 0, NULL, './uploads/realtors/realtor_id-1668685848623.jpg'),
(8, 7, 0, NULL, './uploads/realtors/realtor_id-1668696174111.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sublocation`
--

CREATE TABLE `sublocation` (
  `id` int(20) NOT NULL,
  `location_id` int(20) NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sublocation`
--

INSERT INTO `sublocation` (`id`, `location_id`, `name`) VALUES
(1, 1, 'Kitisuru'),
(2, 1, 'Parklands/Highridge'),
(3, 1, 'Karura'),
(4, 1, 'Kangemi'),
(5, 1, 'Mountain View'),
(6, 2, 'Kilimani'),
(7, 2, 'Kawangware'),
(8, 2, 'Gatina'),
(9, 2, 'Kileleshwa'),
(10, 2, 'Kabiro'),
(11, 3, 'Mutu-Ini'),
(12, 3, 'Ngando'),
(13, 3, 'Riruta'),
(14, 3, 'Uthiru/Ruthimitu'),
(15, 3, 'Waithaka'),
(16, 4, 'Karen'),
(17, 4, 'Nairobi West'),
(18, 4, 'Mugumu-Ini'),
(19, 4, 'South C'),
(20, 4, 'Nyayo Highrise'),
(21, 5, 'Laini Saba'),
(22, 5, 'Lindi'),
(23, 5, 'Makina'),
(24, 5, 'Woodley/Kenyatta'),
(25, 5, 'Golf Course'),
(26, 5, 'Sarangombe'),
(27, 6, 'Githurai'),
(28, 6, 'Kahawa West'),
(29, 6, 'Zimmerman'),
(30, 6, 'Roysambu'),
(31, 6, 'Kahawa'),
(32, 7, 'Clay City'),
(33, 7, 'Mwiki'),
(34, 7, 'Kasarani'),
(35, 7, 'Njiru'),
(36, 7, 'Ruai'),
(37, 8, 'Baba Dogo'),
(38, 8, 'Utalii'),
(39, 8, 'Mathare North'),
(40, 8, 'Lucky Summer'),
(41, 8, 'Korogocho'),
(42, 9, 'Imara Daima'),
(43, 9, 'Kwa Njenga'),
(44, 9, 'Kwa Rueben'),
(45, 9, 'Pipeline'),
(46, 9, 'Kware'),
(47, 10, 'Kariobangi North'),
(48, 10, 'Dandora Area I'),
(49, 10, 'Dandora Area II'),
(50, 10, 'Dandora Area III'),
(51, 10, 'Dandora Area IV'),
(52, 11, 'Kayole North'),
(53, 11, 'Kayole Central'),
(54, 11, 'Kayole South'),
(55, 11, 'Komarock'),
(56, 11, 'Matopeni/Spring Valley'),
(57, 12, 'Upper Savannah'),
(58, 12, 'Lower Savannah'),
(59, 12, 'Embakasi'),
(60, 12, 'Utawala'),
(61, 12, 'Mihango'),
(62, 13, 'Umoja I'),
(63, 13, 'Umoja II'),
(64, 13, 'Mowlem'),
(65, 13, 'Kariobangi South'),
(66, 13, 'Maringo/Hamza'),
(67, 14, 'Viwandani'),
(68, 14, 'Harambee'),
(69, 14, 'Makongeni'),
(70, 14, 'Pumwani'),
(71, 14, 'Eastleigh North'),
(72, 15, 'Eastleigh South'),
(73, 15, 'Airbase'),
(74, 15, 'California'),
(75, 15, 'Ngara'),
(76, 15, 'Nairobi Central'),
(77, 16, 'Pangani'),
(78, 16, 'Ziwani/Kariokor'),
(79, 16, 'Landimawe'),
(80, 16, 'Nairobi South'),
(81, 16, 'Hospital'),
(82, 17, 'Mabatini'),
(83, 17, 'Huruma'),
(84, 17, 'Ngei'),
(85, 17, 'Mlango Kubwa'),
(86, 17, 'Kiamaiko');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `location_id` int(20) NOT NULL,
  `date_created` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `email`, `location_id`, `date_created`) VALUES
(1, 'test@gmail.com', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date_created` varchar(100) NOT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'user',
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `image` varchar(250) DEFAULT NULL,
  `reset_password_token` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `phone`, `password`, `date_created`, `role`, `active`, `verified`, `image`, `reset_password_token`) VALUES
(1, 'peris@gmail.com', 'peris', 'chepkemoi', '0727226387', 'peris', '0000-00-00 00:00:00.000000', 'user', 1, 1, NULL, NULL),
(2, 'test@gmail.com', 'peris', 'milgo', '0727226387', '$2a$12$jMb9g.lWGd8heuyhh6PXvOD9AVR9G9xPvLs6qyJ7wWszL6bZyjEpu', '0000-00-00 00:00:00.000000', 'user', 0, 0, './uploads/users/profile-1666518161989.jpg', NULL),
(3, 'pmemoi2015@gmail.com', 'Peris', 'Chepkemoi', '0727226387', '$2a$12$v83wiuBRlBPxApz0ru3cLup21mL7EMAROoHmsje/yhTArM7TRwoRy', '2022/10/25', 'admin', 1, 1, './uploads/users/profile-1666691672112.jpg', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBtZW1vaTIwMTVAZ21haWwuY29tIiwiaWQiOjMsImlhdCI6MTY2OTI4MjUzNiwiZXhwIjoxNjY5MjgzNzM2fQ.S3N7cAXMrJShFQgMPwJwpOri4LbZgsc47xiBFWQ6i2o'),
(4, 'test2@gmail.com', 'Peris', 'Chepkemoi', '0727226387', '$2a$12$fu9qtHAOocHMt4mpU1cv0encRUNcnFJUMNBMdANgtlC1CFnkYoKYO', '2022/10/25', 'user', 1, 1, './uploads/users/profile-1666707444535.jpg', NULL),
(5, 'test3@gmail.com', 'test', 'test', '0112758489', '$2a$12$xuYTkg0Fn2KtPIn9dAVfm.oEeBDIKYWztC/NtitWkag7uGLJi01vy', '2022/10/26', 'realtor', 0, 1, './uploads/users/profile-1666774325598.jpg', NULL),
(6, 'hadu@mailinator.com', 'Aladdin Mclean', 'Anastasia Carey', '+1 (885) 828-7851', '$2a$12$fbt5N9UNct0CaP/pXjoDwOiHLQRnc1ohcAEKS1FgA8bddpbjEy6g.', '2022/11/9', 'realtor', 1, 1, './uploads/users/profile-1668004850166.jpg', NULL),
(7, 'taqyzyvoh@mailinator.com', 'Nigel Mullins', 'Aretha Michael', '+1 (322) 779-4912', '$2a$12$vK8i0QU1pEr.pV7sikGMpOBNtr7Cl4Deu.RvYVA.PcukYowk1P6Im', '2022/11/11', 'user', 0, 0, '', NULL),
(25, 'chepkemoiperis00@gmail.com', 'Amanda Valdez', 'Britanney Vaughn', '+1 (848) 308-7275', '$2a$12$/QBrn30/.s/hfOuK5q9JZeVAmGVaoLyKcVlHzr6u1AHvYVtZo.NQW', '2022/11/24', 'user', 1, 1, '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZXBrZW1vaXBlcmlzMDBAZ21haWwuY29tIiwiaWQiOjI1LCJpYXQiOjE2NjkyOTcxNzgsImV4cCI6MTY2OTI5ODM3OH0.8Q6SzOVPXJskXmVJ6BIZs81E80-nNcr6WU5LL0McJu8');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `houses`
--
ALTER TABLE `houses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_houses_users` (`user_id`),
  ADD KEY `fk_houses_locations` (`location_id`);

--
-- Indexes for table `house_images`
--
ALTER TABLE `house_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_house_images` (`house_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `realtors`
--
ALTER TABLE `realtors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_realtor` (`user_id`);

--
-- Indexes for table `sublocation`
--
ALTER TABLE `sublocation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `location_sublocation_FK` (`location_id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sub_location` (`location_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `houses`
--
ALTER TABLE `houses`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `house_images`
--
ALTER TABLE `house_images`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `realtors`
--
ALTER TABLE `realtors`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `houses`
--
ALTER TABLE `houses`
  ADD CONSTRAINT `fk_houses_locations` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_houses_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `house_images`
--
ALTER TABLE `house_images`
  ADD CONSTRAINT `fk_house_images` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `realtors`
--
ALTER TABLE `realtors`
  ADD CONSTRAINT `fk_user_realtor` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sublocation`
--
ALTER TABLE `sublocation`
  ADD CONSTRAINT `location_sublocation_FK` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD CONSTRAINT `fk_sub_location` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
