import "reflect-metadata";
import BookRepository from "../services/BookRepository";
import { Container } from "inversify";

const container = new Container();
container.bind(BookRepository).toSelf();

const service = container.get(BookRepository);

export default service;
