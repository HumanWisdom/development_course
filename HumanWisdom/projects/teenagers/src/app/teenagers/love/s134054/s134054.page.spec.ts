import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134054Page } from './s134054.page';

describe('S134054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134054Page;
  let fixture: ComponentFixture<S134054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
