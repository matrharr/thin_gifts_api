from django.core.mail import send_mail

from celery import shared_task

@shared_task
def create_and_send_pdf(order):
    send_mail(
        'Your Thin Gifts Order',
        'Thank you for your recent order.',
        'thingiftorders@gmail.com',
        ['matrharr@gmail.com', 'thingiftorders@gmail.com'],
        fail_silently=False
    )
