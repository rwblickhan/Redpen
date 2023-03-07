alias r := run
alias b := build
alias c := clean

run:
    pnpm dev

build:
    pnpm build

clean:
    rm -rf _dist/*
