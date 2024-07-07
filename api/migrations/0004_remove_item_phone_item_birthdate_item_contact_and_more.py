# Generated by Django 5.0.6 on 2024-07-06 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_item_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='phone',
        ),
        migrations.AddField(
            model_name='item',
            name='birthdate',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='contact',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='email',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='first_name',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='last_name',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='middle_name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
