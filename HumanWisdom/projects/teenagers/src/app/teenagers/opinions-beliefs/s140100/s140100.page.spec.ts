import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140100Page } from './s140100.page';

describe('S140100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140100Page;
  let fixture: ComponentFixture<S140100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
