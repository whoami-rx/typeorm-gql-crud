# Typeorm/GQL CRUD

Steps to run this project:

1. Run `yarn` command
2. Setup database settings inside `ormconfig.json` file
3. Run `yarn start` command

## Create

```
mutation CreateUser {
  createUser(email: "other@lorem", password:"12345") {
    email, password
  }
}
```

## Read

```
query ReadUsers {
	users  { id, email, password }
}
```

## Update

```
mutation UpdateUser {
  updateUser(email: "other@other", password: "new Password2 ") {
    password
  }
}
```

## Delete

```
mutation DeleteUser {
 	deleteUser(id: 1)
}
```
