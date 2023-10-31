import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73080Page } from './s73080.page';

describe('S73080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73080Page;
  let fixture: ComponentFixture<S73080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
