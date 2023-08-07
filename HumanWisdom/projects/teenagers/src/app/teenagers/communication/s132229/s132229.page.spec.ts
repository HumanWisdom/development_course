import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132229Page } from './s132229.page';

describe('S132229Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132229Page;
  let fixture: ComponentFixture<S132229Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132229Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132229Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
