# Generated by Django 5.0.6 on 2024-07-07 00:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_item_bloodtype'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='bloodtype',
            new_name='blood_type',
        ),
    ]
