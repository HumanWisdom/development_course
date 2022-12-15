import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45113Page } from './s45113.page';

describe('S45113Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45113Page;
  let fixture: ComponentFixture<S45113Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45113Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45113Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
