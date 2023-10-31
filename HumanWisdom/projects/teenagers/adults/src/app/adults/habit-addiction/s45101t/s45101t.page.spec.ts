import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45101tPage } from './s45101t.page';

describe('S45101tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45101tPage;
  let fixture: ComponentFixture<S45101tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45101tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45101tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
