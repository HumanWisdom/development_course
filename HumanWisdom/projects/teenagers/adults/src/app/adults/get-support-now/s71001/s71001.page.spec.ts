import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S71001Page } from './s71001.page';

describe('S71001Page', () => {
  let component: S71001Page;
  let fixture: ComponentFixture<S71001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S71001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S71001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
