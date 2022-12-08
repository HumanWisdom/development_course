import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64040Page } from './s64040.page';

describe('S64040Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64040Page;
  let fixture: ComponentFixture<S64040Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64040Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64040Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
