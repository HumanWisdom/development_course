import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132212Page } from './s132212.page';

describe('S132212Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132212Page;
  let fixture: ComponentFixture<S132212Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132212Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132212Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
