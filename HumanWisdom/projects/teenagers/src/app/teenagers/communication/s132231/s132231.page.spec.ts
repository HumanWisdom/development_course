import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132231Page } from './s132231.page';

describe('S132231Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132231Page;
  let fixture: ComponentFixture<S132231Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132231Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132231Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
