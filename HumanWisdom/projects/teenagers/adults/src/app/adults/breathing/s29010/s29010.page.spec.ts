import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S29010Page } from './s29010.page';

describe('S29010Page', () => {
  let component: S29010Page;
  let fixture: ComponentFixture<S29010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S29010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S29010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
