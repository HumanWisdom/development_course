import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132090Page } from './s132090.page';

describe('S132090Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132090Page;
  let fixture: ComponentFixture<S132090Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132090Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132090Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
