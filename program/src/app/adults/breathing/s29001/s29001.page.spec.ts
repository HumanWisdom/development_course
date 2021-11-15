import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29001Page } from './s29001.page';

describe('S29001Page', () => {
  let component: S29001Page;
  let fixture: ComponentFixture<S29001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
