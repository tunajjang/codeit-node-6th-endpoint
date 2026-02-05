import request from "supertest";
import prisma from "../../todo-api-test/src/lib/prisma";
import app from "../../todo-api-test/src/app";

describe("할일 API 통합 테스트", () => {
  beforeEach(async () => {
    await prisma.task.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});
