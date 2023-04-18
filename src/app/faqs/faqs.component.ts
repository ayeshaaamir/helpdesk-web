import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent {
  faq = [
    {
      question: 'What Is Helpdesk Support',
      answer:
        'Helpdesk support is a summary of activities a business undertakes to deliver adequate information and support to customers of a particular company.',
    },
    {
      question: 'What Does the Help Desk Do',
      answer:
        'Helpdesk answers customer queries and addresses user or system issues.',
    },
    {
      question: 'Why Is A Help Desk Important for Your Business?',
      answer:
        'A satisfactory help desk plays a critical role in boosting your business CRM (customer relationship management). It solves your (or potential) customers’ pain points.',
    },
    {
      question: 'How Can I Get Helpdesk Support?',
      answer:
        'Define your help desk goals, Solve service requests promptly, Be transparent in how you solve the customer issues, Write detailed support ticket notes',
    },
    {
      question: 'What Is an Online Helpdesk?',
      answer:
        'An online helpdesk is software to organize your online customer communications, helping you solve your customer issues effectively and efficiently.',
    },
    {
      question: 'What Is A Helpdesk Ticket?',
      answer:
        'A helpdesk ticket is a software to help you track all customer interactions through various channels. The most typical communication channels are email, phone, chat widget, or social media.',
    },
    {
      question: 'Do you have a guarantee? What if I am not happy with HelpDesk?',
      answer:
        'We are so confident that you will be fully satisfied with our software that we offer an unconditional, 30-day money back guarantee!',
    },
    {
      question: 'How long will I keep my email address?',
      answer:
        'Upon leaving HelpDesk your account will be terminated.',
    },
    {
      question: 'What Makes A Good Ticketing System?',
      answer:
        'The ticketing system should enable you to customize the software according to your organizational requirements.',
    },
    {
      question: 'What is crucial part of helpdesk?',
      answer:
        'This should include providing your customers with information they need, resolving their tickets efficiently, communicating with them about business impacting issues and changes, and generally just being easily accessible when they need you.',
    },
    {
      question: 'What is the role of help desk support?',
      answer:
        'A help desk provides technical support to end users, troubleshoots customer and user issues, and/or guides them through specific tasks and actions. Help desks can be incorporated with larger service desks or exist as a separate operation.',
    },
    {
      question: 'What is the process of helpdesk?',
      answer:
        'A help desk process flow defines all the steps involved in resolving a customer query. It shows every step from the moment a ticket is collected and assigned to an agent until the ticket is resolved and customer feedback is collected.',
    },
  ];
}
