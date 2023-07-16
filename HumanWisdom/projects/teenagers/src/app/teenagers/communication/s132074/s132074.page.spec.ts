import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132074Page } from './s132074.page';

describe('S132074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132074Page;
  let fixture: ComponentFixture<S132074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
