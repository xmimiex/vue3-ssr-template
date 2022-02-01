# Step to reproduce


## Build the app, server and run in node inspect mode
```
    yarn build && yarn serve:prod-debug
```

## Run load testing command
```
    ab -c 100 -n 1000 -k http://localhost:3000/
```

As we can see the memory does not regulate as expected.