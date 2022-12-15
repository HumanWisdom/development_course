import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46024Page } from './s46024.page';

describe('S46024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46024Page;
  let fixture: ComponentFixture<S46024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
