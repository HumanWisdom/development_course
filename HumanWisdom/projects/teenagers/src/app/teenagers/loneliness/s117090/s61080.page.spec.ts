import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61080Page } from './s61080.page';

describe('S61080Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61080Page;
  let fixture: ComponentFixture<S61080Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61080Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61080Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
