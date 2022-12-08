import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73060Page } from './s73060.page';

describe('S73060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73060Page;
  let fixture: ComponentFixture<S73060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
