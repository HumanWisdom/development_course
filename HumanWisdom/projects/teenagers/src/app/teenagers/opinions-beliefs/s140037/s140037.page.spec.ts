import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140037Page } from './s140037.page';

describe('S140037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140037Page;
  let fixture: ComponentFixture<S140037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
