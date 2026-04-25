var password = args.Length > 0 ? args[0] : "admin123";
Console.WriteLine(BCrypt.Net.BCrypt.HashPassword(password));
