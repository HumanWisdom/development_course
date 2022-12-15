import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45131Page } from './s45131.page';

describe('S45131Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45131Page;
  let fixture: ComponentFixture<S45131Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45131Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45131Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
