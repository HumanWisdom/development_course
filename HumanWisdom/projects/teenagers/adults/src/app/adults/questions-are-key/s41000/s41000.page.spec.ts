import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S41000Page } from './s41000.page';

describe('S41000Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S41000Page;
  let fixture: ComponentFixture<S41000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S41000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S41000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
