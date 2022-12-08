import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46021Page } from './s46021.page';

describe('S46021Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46021Page;
  let fixture: ComponentFixture<S46021Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46021Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46021Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
