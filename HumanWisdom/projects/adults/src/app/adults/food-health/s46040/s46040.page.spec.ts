import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46040Page } from './s46040.page';

describe('S46040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46040Page;
  let fixture: ComponentFixture<S46040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
