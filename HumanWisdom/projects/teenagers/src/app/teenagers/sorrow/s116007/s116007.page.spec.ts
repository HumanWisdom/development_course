import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116007Page } from './s116007.page';

describe('S116007Page', () => {
      
    let component:  S116007Page;
  let fixture: ComponentFixture<S116007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
