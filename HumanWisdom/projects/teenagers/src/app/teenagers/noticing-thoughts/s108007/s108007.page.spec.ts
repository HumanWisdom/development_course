import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S108007Page } from './s108007.page';

describe('S108007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S108007Page;
  let fixture: ComponentFixture<S108007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S108007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S108007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
