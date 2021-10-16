import * as invoice_resolver from "./invoice.resolver"
import * as invoice_service from "./invoice.service"
import * as human_service from "../human/human.service"
import * as config_service from "../shared/config/config.service"

import * as class_transformer from "class-transformer"
import * as invoice_dto from "./invoice.dto"
import * as invoice_model from "./invoice.model"
describe("invoice", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new human_service.HumanService(undefined)
        inst2 = new invoice_service.InvoiceService(undefined, inst)
        inst3 = new human_service.HumanService(undefined)
        inst4 = new config_service.ConfigService("https://accounts.google.com/o/oauth2/revoke?token=%s")
        inst5 = new invoice_resolver.InvoiceResolver(inst2, inst3, inst4)
    })

    test("0", async () => {
        await inst5.invoice("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
    })

    test("1", async () => {
        await inst5.invoice("a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("2", async () => {
        await inst5.invoice("7289708e-b17a-477c-8a77-9ab575c4b4d8")
    })

    test("3", async () => {
        await inst5.invoice("")
    })
})

describe("customer", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new human_service.HumanService(undefined)
        inst2 = new invoice_service.InvoiceService(undefined, inst)
        inst3 = new human_service.HumanService(undefined)
        inst4 = new config_service.ConfigService("https://api.telegram.org/")
        inst5 = new invoice_resolver.InvoiceResolver(inst2, inst3, inst4)
    })

    test("0", async () => {
        await inst5.customer(9876)
    })

    test("1", async () => {
        await inst5.customer(false)
    })

    test("2", async () => {
        await inst5.customer("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("3", async () => {
        await inst5.customer(true)
    })

    test("4", async () => {
        await inst5.customer(987650)
    })

    test("5", async () => {
        await inst5.customer(-Infinity)
    })
})

describe("invoices", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new human_service.HumanService(undefined)
        inst2 = new invoice_service.InvoiceService(undefined, inst)
        inst3 = new human_service.HumanService(undefined)
        inst4 = new config_service.ConfigService("http://www.example.com/route/123?foo=bar")
        inst5 = new invoice_resolver.InvoiceResolver(inst2, inst3, inst4)
    })

    test("0", async () => {
        await inst5.invoices()
    })
})

// @ponicode
describe("createInvoice", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new human_service.HumanService(undefined)
        inst2 = new invoice_service.InvoiceService(undefined, inst)
        inst3 = new human_service.HumanService(undefined)
        inst4 = new config_service.ConfigService("https://croplands.org/app/a/reset?token=")
        inst5 = new invoice_resolver.InvoiceResolver(inst2, inst3, inst4)
    })

    test("0", async () => {
        let object: any = [{ description: "No description.", rate: -1, quantity: 1 }, { description: "Description: ", rate: 100, quantity: 100 }, { description: "description", rate: 1, quantity: 0 }, { description: "Print Base", rate: 0, quantity: 100 }]
        let inst7: any = new Date("01-01-2030")
        let inst6: any = new Date("01-13-2020")
        await inst5.createInvoice(class_transformer.plainToClass(invoice_dto.CreateInvoiceDTO,{ customer: "da7588892", invoiceNo: "Dwarf Crocodile", paymentStatus: invoice_model.PaymentStatus.PAID, description: "No description available.", currency: invoice_model.Currency.GBP, taxRate: -100, issueDate: inst6, dueDate: inst7, note: "Rustic", items: object }))
    })

    test("1", async () => {
        let object: any = [{ description: "No description.", rate: 1, quantity: -100 }]
        let inst7: any = new Date("32-01-2020")
        let inst6: any = new Date("01-01-2020")
        await inst5.createInvoice(class_transformer.plainToClass(invoice_dto.CreateInvoiceDTO,{ customer: 9876, invoiceNo: "Saltwater Crocodile", paymentStatus: invoice_model.PaymentStatus.NOT_PAID, description: "policy_abc", currency: invoice_model.Currency.USD, taxRate: 1, issueDate: inst6, dueDate: inst7, note: "Intelligent", items: object }))
    })

    test("2", async () => {
        let object: any = [{ description: "my metering label", rate: -1, quantity: 1 }, { description: " description ", rate: -100, quantity: 100 }, { description: "policy_abc", rate: 1, quantity: 1 }, { description: "No description.", rate: -1, quantity: 100 }]
        let inst7: any = new Date("01-01-2020")
        let inst6: any = new Date("01-01-2020")
        await inst5.createInvoice(class_transformer.plainToClass(invoice_dto.CreateInvoiceDTO,{ customer: 12345, invoiceNo: "Australian Freshwater Crocodile", paymentStatus: invoice_model.PaymentStatus.PAID, description: "Organize files in your directory instantly, ", currency: invoice_model.Currency.GBP, taxRate: 0, issueDate: inst6, dueDate: inst7, note: "Rustic", items: object }))
    })

    test("3", async () => {
        let object: any = [{ description: "my metering label", rate: -100, quantity: 100 }, { description: "Print Base", rate: 1, quantity: 100 }, { description: "my metering label", rate: 100, quantity: 100 }]
        let inst7: any = new Date("01-01-2030")
        let inst6: any = new Date("01-01-2030")
        await inst5.createInvoice(class_transformer.plainToClass(invoice_dto.CreateInvoiceDTO,{ customer: "bc23a9d531064583ace8f67dad60f6bb", invoiceNo: "Dwarf Crocodile", paymentStatus: invoice_model.PaymentStatus.NOT_PAID, description: "No description.", currency: invoice_model.Currency.EUR, taxRate: 0, issueDate: inst6, dueDate: inst7, note: "Awesome", items: object }))
    })

    test("4", async () => {
        let object: any = [{ description: "This is group1", rate: -100, quantity: -100 }]
        let inst7: any = new Date("01-13-2020")
        let inst6: any = new Date("01-13-2020")
        await inst5.createInvoice(class_transformer.plainToClass(invoice_dto.CreateInvoiceDTO,{ customer: "da7588892", invoiceNo: "Nile Crocodile", paymentStatus: invoice_model.PaymentStatus.NOT_PAID, description: "No description.", currency: invoice_model.Currency.USD, taxRate: 100, issueDate: inst6, dueDate: inst7, note: "Rustic", items: object }))
    })

    test("5", async () => {
        let inst7: any = new Date("")
        let inst6: any = new Date("")
        await inst5.createInvoice(class_transformer.plainToClass(invoice_dto.CreateInvoiceDTO,{ customer: "", invoiceNo: "", paymentStatus: invoice_model.PaymentStatus.NOT_PAID, description: "", currency: invoice_model.Currency.NGN, taxRate: Infinity, issueDate: inst6, dueDate: inst7, note: "", items: [] }))
    })
})
