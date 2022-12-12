import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60019Page } from './s60019.page';

describe('S60019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60019Page;
  let fixture: ComponentFixture<S60019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
