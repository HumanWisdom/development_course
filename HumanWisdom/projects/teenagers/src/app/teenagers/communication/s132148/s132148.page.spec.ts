import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132148Page } from './s132148.page';

describe('S132148Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132148Page;
  let fixture: ComponentFixture<S132148Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132148Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132148Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
