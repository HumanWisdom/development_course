import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45019Page } from './s45019.page';

describe('S45019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45019Page;
  let fixture: ComponentFixture<S45019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
