import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132121Page } from './s132121.page';

describe('S132121Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132121Page;
  let fixture: ComponentFixture<S132121Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132121Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
