import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132007Page } from './s132007.page';

describe('S132007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132007Page;
  let fixture: ComponentFixture<S132007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
