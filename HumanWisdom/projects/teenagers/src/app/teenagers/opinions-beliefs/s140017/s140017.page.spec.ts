import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140017Page } from './s140017.page';

describe('S140017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140017Page;
  let fixture: ComponentFixture<S140017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
