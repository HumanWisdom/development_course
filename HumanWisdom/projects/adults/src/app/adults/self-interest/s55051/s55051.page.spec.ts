import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55051Page } from './s55051.page';

describe('S55051Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55051Page;
  let fixture: ComponentFixture<S55051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
