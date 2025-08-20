SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

USE mydatabase;

CREATE TABLE beacons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    Registration_date DATE NOT NULL
);

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(10),
    age DATE,
    beacon_pieces INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(10),
    age DATE,
    start_date DATE NOT NULL,
    end_date DATE NULL
);

CREATE TABLE parent_child (
    parent_id INT NOT NULL,
    child_id INT NOT NULL,
    Registration_date DATE NOT NULL,
    FOREIGN KEY (parent_id) REFERENCES users(id),
    FOREIGN KEY (child_id) REFERENCES users(id),
    PRIMARY KEY(parent_id, child_id)
);

CREATE TABLE admin_beacon (
    admin_id INT NOT NULL,
    beacon_id INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES admins(id),
    FOREIGN KEY (beacon_id) REFERENCES beacons(id),
    PRIMARY KEY(admin_id, beacon_id)
);

INSERT INTO users (id, name, mail, password, number, gender, age, start_date, end_date) VALUES
(1, 'ピカチュウ', 'pika@icloud.com', '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b', '080-0000-0000', 'male', '2010/3/3', '2019/1/1', NULL),
(2, 'リザードン', 'riza@gmail.com', 'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35', '070-1111-1111', 'female', '2005/7/7', '2020/10/10', NULL),
(3, 'ムーン', 'moon@ths.ac.jp', '4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce', '090-3333-3333', NULL, '2000/12/25', '2020/5/5', NULL),
(4, 'Arceus', 'Arceus@docomo.ne.jp', '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a', '03-4444-4444', NULL, '1980/8/8', '2022/6/6', '2022/7/7'),
(5, 'カビゴン', 'gon@i.softbank.jp', 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d', '0120-5555-5555', 'female', '1950/2/2', '2023/7/7', NULL),
(6, 'ライチュウ', 'rai@icloud.com', 'b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9', '080-1111-1111', 'male', '2015/3/1', '2019/1/1', NULL),
(7, 'ゴンベ', 'gon2@i.softbank.jp', 'c837649cce43f2729138e72cc315207057ac82599a59be72765a477f22d14a54', '0120-6666-6666', 'female', '2005/1/26', '2023/7/7', NULL);

INSERT INTO admins (id, name, mail, password, number, gender, age, beacon_pieces, start_date, end_date) VALUES
(1, '田中太郎', 'tanaka@icloud.com', 'ad57366865126e55649ecb23ae1d48887544976efea46a48eb5d85a6eeb4d306', '080-1234-1234', NULL, '1990/1/1', 3, '2015/1/1', NULL),
(2, '向島慎之介', 'mukoujima@gmil.com', '16dc368a89b428b2485484313ba67a3912ca03f2b2b42429174a4f8b3dc84e44', '070-5678-5678', NULL, '2000/5/5', 5, '2015/10/10', NULL),
(3, '榊原街道州全一', 'sakakibara@ths.ac.jp', '37834f2f25762f23e1f74a531cbe445db73d6765ebe60878a7dfbecd7d4af6e1', '090-9999-9999', NULL, '1990/11/11', 7, '2016/5/5', NULL);

INSERT INTO beacons (id, name, Registration_date) VALUES
(1, 'Beaconversion 1.3.1', '2010/8/8'),
(2, 'Beaconversion 1.3.1', '2010/8/8'),
(3, 'Beaconversion 1.3.1', '2010/8/8'),
(4, 'Beaconversion 1.3.1', '2010/8/8'),
(5, 'Beaconversion 1.3.1', '2010/8/8'),
(6, 'Beaconversion 1.3.1', '2010/8/8'),
(7, 'Beaconversion 1.3.1', '2010/8/8'),
(8, 'Beaconversion 1.3.1', '2010/8/8'),
(9, 'Beaconversion 1.3.1', '2010/8/8'),
(10, 'Beaconversion 1.3.1', '2010/8/8'),
(11, 'Beaconversion 1.3.1', '2010/8/8'),
(12, 'Beaconversion 1.3.1', '2010/8/8'),
(13, 'Beaconversion 1.3.1', '2010/8/8'),
(14, 'Beaconversion 1.3.1', '2010/8/8'),
(15, 'Beaconversion 1.3.1', '2010/8/8'),
(16, 'Beaconversion 1.3.1', '2010/8/8'),
(17, 'Beaconversion 1.3.1', '2010/8/8'),
(18, 'Beaconversion 1.3.1', '2010/8/8'),
(19, 'Beaconversion 1.3.1', '2010/8/8'),
(20, 'Beaconversion 1.3.1', '2010/8/8'),
(21, 'Beaconversion 3.0', '2025/7/1'),
(22, 'Beaconversion 3.0', '2025/7/1'),
(23, 'Beaconversion 3.0', '2025/7/1'),
(24, 'Beaconversion 3.0', '2025/7/1'),
(25, 'Beaconversion 3.0', '2025/7/1'),
(26, 'Beaconversion 3.0', '2025/7/1'),
(27, 'Beaconversion 3.0', '2025/7/1'),
(28, 'Beaconversion 3.0', '2025/7/1'),
(29, 'Beaconversion 3.0', '2025/7/1'),
(30, 'Beaconversion 3.0', '2025/7/1');

INSERT INTO admin_beacon (admin_id, beacon_id, order_date) VALUES
(1, 1, '2025/1/1'),
(1, 2, '2025/1/1'),
(1, 3, '2025/1/1'),
(2, 11, '2023/2/2'),
(2, 12, '2023/2/2'),
(2, 13, '2023/2/2'),
(2, 14, '2023/2/2'),
(2, 15, '2023/2/2'),
(3, 21, '2025/7/1'),
(3, 22, '2025/7/1'),
(3, 23, '2025/7/1'),
(3, 24, '2025/7/1'),
(3, 25, '2025/7/1'),
(3, 26, '2025/7/1'),
(3, 27, '2025/7/1');

INSERT INTO parent_child (parent_id, child_id, Registration_date) VALUES
(6, 1, '2015/3/3'),
(5, 7, '2020/7/8');